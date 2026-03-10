import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipo")
export default class IpoController {
  @operation({
    summary: "Get Ipo",
  })
  @get()
  static getIpo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipo",
  })
  @post("{id}")
  static createIpo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
