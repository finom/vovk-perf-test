import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ipe")
export default class IpeController {
  @operation({
    summary: "Get Ipe",
  })
  @get()
  static getIpe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ipe",
  })
  @post("{id}")
  static createIpe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
