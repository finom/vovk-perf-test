import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iuq")
export default class IuqController {
  @operation({
    summary: "Get Iuq",
  })
  @get()
  static getIuq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iuq",
  })
  @post("{id}")
  static createIuq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
