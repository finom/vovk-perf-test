import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iev")
export default class IevController {
  @operation({
    summary: "Get Iev",
  })
  @get()
  static getIev = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iev",
  })
  @post("{id}")
  static createIev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
