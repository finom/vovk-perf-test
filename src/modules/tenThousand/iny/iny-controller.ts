import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iny")
export default class InyController {
  @operation({
    summary: "Get Iny",
  })
  @get()
  static getIny = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iny",
  })
  @post("{id}")
  static createIny = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
