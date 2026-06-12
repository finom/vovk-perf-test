import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iaz")
export default class IazController {
  @operation({
    summary: "Get Iaz",
  })
  @get()
  static getIaz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iaz",
  })
  @post("{id}")
  static createIaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
