import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuk")
export default class IukController {
  @operation({
    summary: "Get Iuk",
  })
  @get()
  static getIuk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuk",
  })
  @post("{id}")
  static createIuk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
