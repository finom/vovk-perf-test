import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dqk")
export default class DqkController {
  @operation({
    summary: "Get Dqk",
  })
  @get()
  static getDqk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dqk",
  })
  @post("{id}")
  static createDqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
