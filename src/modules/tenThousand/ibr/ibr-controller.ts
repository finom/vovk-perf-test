import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ibr")
export default class IbrController {
  @operation({
    summary: "Get Ibr",
  })
  @get()
  static getIbr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ibr",
  })
  @post("{id}")
  static createIbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
