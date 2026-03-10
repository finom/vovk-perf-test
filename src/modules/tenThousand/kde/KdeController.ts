import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kde")
export default class KdeController {
  @operation({
    summary: "Get Kde",
  })
  @get()
  static getKde = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kde",
  })
  @post("{id}")
  static createKde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
