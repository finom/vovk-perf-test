import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuv")
export default class CuvController {
  @operation({
    summary: "Get Cuv",
  })
  @get()
  static getCuv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuv",
  })
  @post("{id}")
  static createCuv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
