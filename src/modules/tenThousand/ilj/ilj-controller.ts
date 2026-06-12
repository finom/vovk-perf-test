import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilj")
export default class IljController {
  @operation({
    summary: "Get Ilj",
  })
  @get()
  static getIlj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilj",
  })
  @post("{id}")
  static createIlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
