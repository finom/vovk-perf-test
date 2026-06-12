import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cla")
export default class ClaController {
  @operation({
    summary: "Get Cla",
  })
  @get()
  static getCla = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cla",
  })
  @post("{id}")
  static createCla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
