import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqc")
export default class DqcController {
  @operation({
    summary: "Get Dqc",
  })
  @get()
  static getDqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqc",
  })
  @post("{id}")
  static createDqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
