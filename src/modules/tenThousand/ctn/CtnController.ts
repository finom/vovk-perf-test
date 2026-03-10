import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctn")
export default class CtnController {
  @operation({
    summary: "Get Ctn",
  })
  @get()
  static getCtn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctn",
  })
  @post("{id}")
  static createCtn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
