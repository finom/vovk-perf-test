import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilc")
export default class IlcController {
  @operation({
    summary: "Get Ilc",
  })
  @get()
  static getIlc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilc",
  })
  @post("{id}")
  static createIlc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
