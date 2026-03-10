import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnc")
export default class HncController {
  @operation({
    summary: "Get Hnc",
  })
  @get()
  static getHnc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnc",
  })
  @post("{id}")
  static createHnc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
