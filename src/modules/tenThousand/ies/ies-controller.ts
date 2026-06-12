import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ies")
export default class IesController {
  @operation({
    summary: "Get Ies",
  })
  @get()
  static getIes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ies",
  })
  @post("{id}")
  static createIes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
