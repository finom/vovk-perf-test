import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("idd")
export default class IddController {
  @operation({
    summary: "Get Idd",
  })
  @get()
  static getIdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Idd",
  })
  @post("{id}")
  static createIdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
