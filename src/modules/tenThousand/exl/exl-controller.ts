import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("exl")
export default class ExlController {
  @operation({
    summary: "Get Exl",
  })
  @get()
  static getExl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Exl",
  })
  @post("{id}")
  static createExl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
