import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cun")
export default class CunController {
  @operation({
    summary: "Get Cun",
  })
  @get()
  static getCun = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cun",
  })
  @post("{id}")
  static createCun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
