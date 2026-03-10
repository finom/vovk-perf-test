import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bec")
export default class BecController {
  @operation({
    summary: "Get Bec",
  })
  @get()
  static getBec = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bec",
  })
  @post("{id}")
  static createBec = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
