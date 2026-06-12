import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iru")
export default class IruController {
  @operation({
    summary: "Get Iru",
  })
  @get()
  static getIru = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iru",
  })
  @post("{id}")
  static createIru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
