import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itn")
export default class ItnController {
  @operation({
    summary: "Get Itn",
  })
  @get()
  static getItn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itn",
  })
  @post("{id}")
  static createItn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
