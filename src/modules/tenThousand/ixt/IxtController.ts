import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixt")
export default class IxtController {
  @operation({
    summary: "Get Ixt",
  })
  @get()
  static getIxt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixt",
  })
  @post("{id}")
  static createIxt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
