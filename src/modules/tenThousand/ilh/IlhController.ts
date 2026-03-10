import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ilh")
export default class IlhController {
  @operation({
    summary: "Get Ilh",
  })
  @get()
  static getIlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ilh",
  })
  @post("{id}")
  static createIlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
