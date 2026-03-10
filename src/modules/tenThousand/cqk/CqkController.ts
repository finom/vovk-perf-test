import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cqk")
export default class CqkController {
  @operation({
    summary: "Get Cqk",
  })
  @get()
  static getCqk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cqk",
  })
  @post("{id}")
  static createCqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
