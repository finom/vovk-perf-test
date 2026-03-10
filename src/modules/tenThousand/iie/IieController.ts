import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iie")
export default class IieController {
  @operation({
    summary: "Get Iie",
  })
  @get()
  static getIie = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iie",
  })
  @post("{id}")
  static createIie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
