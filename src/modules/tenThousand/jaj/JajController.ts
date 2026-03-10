import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jaj")
export default class JajController {
  @operation({
    summary: "Get Jaj",
  })
  @get()
  static getJaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jaj",
  })
  @post("{id}")
  static createJaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
