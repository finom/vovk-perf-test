import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kml")
export default class KmlController {
  @operation({
    summary: "Get Kml",
  })
  @get()
  static getKml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kml",
  })
  @post("{id}")
  static createKml = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
