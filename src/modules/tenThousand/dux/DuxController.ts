import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dux")
export default class DuxController {
  @operation({
    summary: "Get Dux",
  })
  @get()
  static getDux = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dux",
  })
  @post("{id}")
  static createDux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
