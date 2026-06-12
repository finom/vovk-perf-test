import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifm")
export default class IfmController {
  @operation({
    summary: "Get Ifm",
  })
  @get()
  static getIfm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifm",
  })
  @post("{id}")
  static createIfm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
