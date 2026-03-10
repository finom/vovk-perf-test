import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqg")
export default class DqgController {
  @operation({
    summary: "Get Dqg",
  })
  @get()
  static getDqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqg",
  })
  @post("{id}")
  static createDqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
