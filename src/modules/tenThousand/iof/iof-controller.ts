import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iof")
export default class IofController {
  @operation({
    summary: "Get Iof",
  })
  @get()
  static getIof = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iof",
  })
  @post("{id}")
  static createIof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
