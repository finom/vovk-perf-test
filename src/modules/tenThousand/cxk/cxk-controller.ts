import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxk")
export default class CxkController {
  @operation({
    summary: "Get Cxk",
  })
  @get()
  static getCxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxk",
  })
  @post("{id}")
  static createCxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
