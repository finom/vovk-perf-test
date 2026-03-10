import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ion")
export default class IonController {
  @operation({
    summary: "Get Ion",
  })
  @get()
  static getIon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ion",
  })
  @post("{id}")
  static createIon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
