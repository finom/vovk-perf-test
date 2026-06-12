import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehu")
export default class EhuController {
  @operation({
    summary: "Get Ehu",
  })
  @get()
  static getEhu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehu",
  })
  @post("{id}")
  static createEhu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
