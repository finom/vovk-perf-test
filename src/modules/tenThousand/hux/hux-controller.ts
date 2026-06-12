import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hux")
export default class HuxController {
  @operation({
    summary: "Get Hux",
  })
  @get()
  static getHux = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hux",
  })
  @post("{id}")
  static createHux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
