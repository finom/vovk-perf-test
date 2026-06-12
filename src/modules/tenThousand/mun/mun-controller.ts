import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mun")
export default class MunController {
  @operation({
    summary: "Get Mun",
  })
  @get()
  static getMun = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mun",
  })
  @post("{id}")
  static createMun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
