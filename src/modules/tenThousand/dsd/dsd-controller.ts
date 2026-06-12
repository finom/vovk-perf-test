import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsd")
export default class DsdController {
  @operation({
    summary: "Get Dsd",
  })
  @get()
  static getDsd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsd",
  })
  @post("{id}")
  static createDsd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
