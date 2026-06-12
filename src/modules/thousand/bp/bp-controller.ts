import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bp")
export default class BpController {
  @operation({
    summary: "Get Bp",
  })
  @get()
  static getBp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bp",
  })
  @post("{id}")
  static createBp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
