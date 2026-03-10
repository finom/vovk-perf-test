import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hmd")
export default class HmdController {
  @operation({
    summary: "Get Hmd",
  })
  @get()
  static getHmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hmd",
  })
  @post("{id}")
  static createHmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
