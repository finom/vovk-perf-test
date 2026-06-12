import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilf")
export default class IlfController {
  @operation({
    summary: "Get Ilf",
  })
  @get()
  static getIlf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilf",
  })
  @post("{id}")
  static createIlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
