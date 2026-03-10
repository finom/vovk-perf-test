import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("icw")
export default class IcwController {
  @operation({
    summary: "Get Icw",
  })
  @get()
  static getIcw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Icw",
  })
  @post("{id}")
  static createIcw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
