import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izo")
export default class IzoController {
  @operation({
    summary: "Get Izo",
  })
  @get()
  static getIzo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izo",
  })
  @post("{id}")
  static createIzo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
