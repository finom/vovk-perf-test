import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kyu")
export default class KyuController {
  @operation({
    summary: "Get Kyu",
  })
  @get()
  static getKyu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kyu",
  })
  @post("{id}")
  static createKyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
