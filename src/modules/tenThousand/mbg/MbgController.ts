import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbg")
export default class MbgController {
  @operation({
    summary: "Get Mbg",
  })
  @get()
  static getMbg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mbg",
  })
  @post("{id}")
  static createMbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
