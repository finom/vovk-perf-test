import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bfk")
export default class BfkController {
  @operation({
    summary: "Get Bfk",
  })
  @get()
  static getBfk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bfk",
  })
  @post("{id}")
  static createBfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
