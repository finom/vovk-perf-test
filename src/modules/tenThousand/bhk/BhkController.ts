import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhk")
export default class BhkController {
  @operation({
    summary: "Get Bhk",
  })
  @get()
  static getBhk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bhk",
  })
  @post("{id}")
  static createBhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
