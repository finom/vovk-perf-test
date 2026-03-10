import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibd")
export default class IbdController {
  @operation({
    summary: "Get Ibd",
  })
  @get()
  static getIbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibd",
  })
  @post("{id}")
  static createIbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
