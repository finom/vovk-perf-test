import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihr")
export default class IhrController {
  @operation({
    summary: "Get Ihr",
  })
  @get()
  static getIhr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ihr",
  })
  @post("{id}")
  static createIhr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
