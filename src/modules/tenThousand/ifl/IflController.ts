import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ifl")
export default class IflController {
  @operation({
    summary: "Get Ifl",
  })
  @get()
  static getIfl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ifl",
  })
  @post("{id}")
  static createIfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
