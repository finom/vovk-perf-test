import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("izp")
export default class IzpController {
  @operation({
    summary: "Get Izp",
  })
  @get()
  static getIzp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Izp",
  })
  @post("{id}")
  static createIzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
