import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iop")
export default class IopController {
  @operation({
    summary: "Get Iop",
  })
  @get()
  static getIop = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iop",
  })
  @post("{id}")
  static createIop = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
