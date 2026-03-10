import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bpg")
export default class BpgController {
  @operation({
    summary: "Get Bpg",
  })
  @get()
  static getBpg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bpg",
  })
  @post("{id}")
  static createBpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
