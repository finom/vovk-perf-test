import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyv")
export default class KyvController {
  @operation({
    summary: "Get Kyv",
  })
  @get()
  static getKyv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyv",
  })
  @post("{id}")
  static createKyv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
